import Ember from 'ember';

export default Ember.Component.extend({

  /**
    Array of search objects.

    @property treeContent
    @type Array
  */
  treeContent: Ember.A(),

  /**
    Result array consisting of filtered objects.

    @property results
    @type Array
  */
  results: Ember.A(),

  /**
    Event timestamp in milliseconds.

    @property lastKeyPress
    @type number
  */
  lastKeyPress: 0,

  /**
   Method that recursively returns filtered treeContent.

   @private
   @method _searchTree
 */
  _searchTree(regexQuery, currentTree) {
    let resultTree = [];

    currentTree.forEach(element => {
      if (this._elementMatchesRegex(regexQuery, element)) {
        resultTree.push(element);
      } else if (this._elementHasChildren(element)) {
        let resultChildren = this._searchTree(regexQuery, element.children);

        if (resultChildren.length > 0) {
          let newElement = JSON.parse(JSON.stringify(element));
          Ember.set(newElement, 'children', resultChildren);
          resultTree.push(newElement);
        }
      }
    });

    return resultTree;
  },

  /**
   Method that checks element caption string for regex.

   @private
   @method _elementMatchesRegex
 */
  _elementMatchesRegex(regex, element) {
    return regex.test(element.caption.string);
  },

  /**
   Method that checks if element has children.

   @private
   @method _elementHasChildren
 */
  _elementHasChildren(element) {
    return (typeof element === 'object') && (typeof element.children !== 'undefined') && (element.children !== null) && (element.children.length > 0);
  },

  /**
    Initializes DOM-related component's logic.
  */
  didInsertElement() {
    this.set('results', this.get('treeContent'));
    const $sitemapSearch = document.getElementById('sitemap-search');

    this.$('.sitemap-searchbar.ui.search').on('click', e => {
      this.$('#results-list').show();
      e.stopPropagation();
    });

    this.$('#results-list').on('click', e => {
      e.stopPropagation();
    });

    this.$(document).on('click', e => {
      this.$('#results-list').hide();
      e.stopPropagation();
    });

    $sitemapSearch.addEventListener('input', (e) => {
      let query = $sitemapSearch.value.toLowerCase();

      if ((query === null || query === 'undefined' || query === '')) {
        this.set('results', this.get('treeContent'));
      } else if (e.timeStamp - this.lastKeyPress > 200) { // Recursive search will be initiated only if last keypress happened more than 200 ms ago (for performance reasons).
        let regexQuery = new RegExp(`${query}`, 'gi');

        this.set('results', this._searchTree(regexQuery, this.get('treeContent')));
        this.set('lastKeyPress', e.timeStamp);
      }
    });
  }
});
