import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
<%if(projections) {%>import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';<%}%>
export let Model = Mixin.create({
<%= model %>
});<%if(parentModelName) {%>
export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: '<%= parentModelName %>'
  });
};
<%}%>
<%if(projections) {%>export let defineProjections = function (modelClass) {<%}%><%= projections %><%if(projections) {%>};
<%}%>
