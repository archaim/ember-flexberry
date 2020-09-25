import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('flexberry-sitemap-searchbar', 'Integration | Component | flexberry sitemap searchbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{flexberry-sitemap-searchbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#flexberry-sitemap-searchbar}}
      template block text
    {{/flexberry-sitemap-searchbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
