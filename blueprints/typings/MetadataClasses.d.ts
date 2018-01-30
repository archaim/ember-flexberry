//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a Typewriter tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
declare module "MetadataClasses" {
    
    export class Form {
        
        public external: boolean;
        public caption: string;
        public name: string;
        public className: string;
        public attrs: DSattr[];
        public projections: ProjectionForForm[];
    }
    export class ProjectionForForm {
        
        public modelName: string;
        public modelProjection: string;
    }
    export class ListForm extends Form {
        
        public newForm: string;
        public editForm: string;
    }
    export class PropertyLookup {
        
        public master: string;
        public displayAttributeName: string;
        public required: boolean;
        public relationName: string;
        public projection: string;
        public detailModelName: string;
    }
    export class EditForm extends Form {
        
        public propertyLookup: PropertyLookup[];
    }
    export class Enumeration {
        
        public nameSpace: string;
        public className: string;
        public enumObjects: { [key: string]: string; };
    }
    export class EmberObject {
        
        public name: string;
        public emberObjectName: string;
        public className: string;
        public attrs: DSattr[];
    }
    export class Model {
        
        public name: string;
        public modelName: string;
        public className: string;
        public parentModelName: string;
        public parentClassName: string;
        public attrs: DSattr[];
        public belongsTo: DSbelongsTo[];
        public hasMany: DShasMany[];
        public projections: ProjectionForModel[];
        public stored: boolean;
        public offline: boolean;
        public external: boolean;
    }
    export class DSattr {
        
        public name: string;
        public type: string;
        public flexberryType: string;
        public notNull: boolean;
        public defaultValue: string;
        public stored: boolean;
    }
    export class Relation {
        
        public name: string;
        public relatedTo: string;
        public inverse: string;
    }
    export class DShasMany extends Relation {
        
    }
    export class DSbelongsTo extends Relation {
        
        public polymorphic: boolean;
        public presence: boolean;
    }
    export class ProjectionForModel {
        
        public name: string;
        public modelName: string;
        public attrs: ProjAttr[];
        public belongsTo: ProjBelongsTo[];
        public hasMany: ProjHasMany[];
    }
    export class ProjAttr {
        
        public name: string;
        public caption: string;
        public hidden: boolean;
        public index: number;
    }
    export class ProjRelation extends Relation {
        
        public caption: string;
    }
    export class ProjHasMany extends ProjRelation {
        
        public projectionName: string;
    }
    export class ProjBelongsTo extends ProjRelation {
        
        public lookupValue: string;
        public lookupValueField: string;
        public relationName: string;
        public belongsTo: ProjBelongsTo[];
        public hidden: boolean;
        public attrs: ProjAttr[];
        public index: number;
    }
    export class Sitemap {
        
        public applicationCaption: string;
        public applicationTitle: string;
        public items: SitemapItem[];
        public mobile: boolean;
    }
    export class SitemapItem {
        
        public link: string;
        public menuName: string;
        public caption: string;
        public title: string;
        public children: SitemapItem[];
    }
}