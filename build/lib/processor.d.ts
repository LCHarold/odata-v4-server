/// <reference types="node" />
import { Transform } from "stream";
import { ODataResult } from "./result";
export declare type GeneratorAction = (value?) => any;
export declare type PromiseGeneratorHandler = Promise<any> | void;
export declare namespace ODataGeneratorHandlers {
    function PromiseHandler(request: any, next: GeneratorAction): PromiseGeneratorHandler;
    function StreamHandler(request: any, next: GeneratorAction): PromiseGeneratorHandler;
    function GeneratorHandler(request: any, next: GeneratorAction): PromiseGeneratorHandler;
}
export declare enum ODataMetadataType {
    minimal = 0,
    full = 1,
    none = 2,
}
export interface ODataProcessorOptions {
    disableEntityConversion: boolean;
    metadata: ODataMetadataType;
    objectMode: boolean;
}
export declare class ODataProcessor extends Transform {
    private serverType;
    private options;
    private ctrl;
    private prevCtrl;
    private instance;
    private resourcePath;
    private workflow;
    private context;
    private method;
    private url;
    private query;
    private entitySets;
    private odataContext;
    private body;
    private streamStart;
    private streamEnabled;
    private streamObject;
    private streamEnd;
    private streamInlineCount;
    private streamNextLink;
    private elementType;
    private resultCount;
    constructor(context: any, server: any, options?: ODataProcessorOptions);
    _transform(chunk: any, _: string, done: Function): any;
    protected _flush(done?: Function): void;
    private __qualifiedTypeName(part);
    private __EntityCollectionNavigationProperty(part);
    private __EntityNavigationProperty(part);
    private __PrimitiveProperty(part);
    private __read(ctrl, part, params, data?, filter?, elementType?, include?, select?);
    private __deserialize(obj, type);
    private __stripOData(obj);
    private __EntitySetName(part);
    private __actionOrFunctionImport(part);
    private __actionOrFunction(part);
    private __appendLinks(ctrl, elementType, context, body, result?);
    private __appendODataContext(result, ctrlType, includes?, select?);
    private __resolveAsync(type, prop, propValue, entity, converter);
    private __setODataType(context, elementType);
    private __convertEntity(context, result, elementType, includes?, select?);
    private __include(include, select, context, prop, ctrl, result, elementType);
    private __enableStreaming(part);
    private __applyParams(container, name, params, queryString?, result?, include?);
    execute(body?: any): Promise<ODataResult>;
}
