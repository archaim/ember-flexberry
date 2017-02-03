import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
      Handler for success ui-message component 'onShow' action.

      @method actions.onSuccessShow
     */
    onSuccessShow() {
    },

    /**
      Handler for success ui-message component 'onHide' action.

      @method actions.onSuccessHide
     */
    onSuccessHide() {
      this.set('showFormSuccess', undefined);
    },

    /**
      Handler for error ui-message component 'onShow' action.

      @method actions.onErrorShow
     */
    onErrorShow() {
    },

    /**
      Handler for error ui-message component 'onHide' action.

      @method actions.onErrorHide
     */
    onErrorHide() {
      this.set('showFormError', undefined);
    }
  },

  module: 'message',

  /**
    A message can be set to visible to force itself to be shown.

    @property visible
    @type Boolean
    @default true
  */
  visible: true,

  /**
    A message can float above content that it is related to content.

    @property floating
    @type Boolean
    @default false
  */
  floating: false,

  /**
    A message can only take up the width of its content.

    @property compact
    @type Boolean
    @default false
  */
  compact: false,

  /**
    A message can be formatted to attach itself to other content.

    @property attached
    @type Boolean
    @default false
  */
  attached: false,

  /**
    A message that the user can choose to hide.

    @property closeable
    @type Boolean
    @default false
  */
  closeable: false,

  /**
    Message type.

    @property type
    @type String
    @default null
  */
  type: null,

  /**
    A message can be formatted to be different colors.

    @property color
    @type String
    @default null
  */
  color: null,

  /**
    A message can have different sizes.


    @property size
    @type String
    @default null
  */
  size: null,

  /**
    A message can contain an icon.

    @property icon
    @type String
    @default null
  */
  icon: null,

  /**
    Message title.

    @property title
    @type String
    @default null
    @deprecated Use `caption`.
  */
  title: null,

  /**
    Message title.

    @property caption
    @type String
    @default null
  */
  caption: null,

  /**
    Message body.

    @property message
    @type String
    @default null
  */
  message: null,

  /**
    Template text for 'flexberry-textbox' component.

    @property componentTemplateText
    @type String
   */
  componentTemplateText: new Ember.Handlebars.SafeString(
    '{{#ui-message</br>' +
    '    caption=caption</br>' +
    '    visible=true</br>' +
    '    type=type</br>' +
    '    color=color</br>' +
    '    size=size</br>' +
    '    icon=icon</br>' +
    '    title=title</br>' +
    '    message=message</br>' +
    '  }}</br>' +
    '{{/ui-message}}'
    ),

  /**
    Component settings metadata.

    @property componentSettingsMetadata
    @type Object[]
   */
  componentSettingsMetadata: Ember.computed(function() {
    let componentSettingsMetadata = Ember.A();
    componentSettingsMetadata.pushObject({
      settingName: 'caption',
      settingType: 'string',
      settingDefaultValue: null,
      bindedControllerPropertieName: 'caption'
    });
    componentSettingsMetadata.pushObject({
      settingName: 'visible',
      settingType: 'boolean',
      settingDefaultValue: true,
      bindedControllerPropertieName: 'visible'
    });
    componentSettingsMetadata.pushObject({
      settingName: 'type',
      settingType: 'string',
      settingDefaultValue: null,
      bindedControllerPropertieName: 'type'
    });
    componentSettingsMetadata.pushObject({
      settingName: 'color',
      settingType: 'string',
      settingDefaultValue: null,
      bindedControllerPropertieName: 'color'
    });
    componentSettingsMetadata.pushObject({
      settingName: 'size',
      settingType: 'string',
      settingDefaultValue: null,
      bindedControllerPropertieName: 'size'
    });
    componentSettingsMetadata.pushObject({
      settingName: 'icon',
      settingType: 'string',
      settingDefaultValue: null,
      bindedControllerPropertieName: 'icon'
    });
    componentSettingsMetadata.pushObject({
      settingName: 'title',
      settingType: 'string',
      settingDefaultValue: null,
      bindedControllerPropertieName: 'title'
    });
    componentSettingsMetadata.pushObject({
      settingName: 'message',
      settingType: 'string',
      settingDefaultValue: null,
      bindedControllerPropertieName: 'message'
    });
    return componentSettingsMetadata;
  })
});
