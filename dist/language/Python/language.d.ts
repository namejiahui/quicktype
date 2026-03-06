import type { RenderContext } from "../../Renderer";
import { BooleanOption, EnumOption } from "../../RendererOptions";
import { TargetLanguage } from "../../TargetLanguage";
import { type Type } from "../../Type";
import type { StringTypeMapping } from "../../Type/TypeBuilderUtils";
import type { LanguageName, RendererOptions } from "../../types";
import { PythonRenderer } from "./PythonRenderer";
export interface PythonFeatures {
    dataClasses: boolean;
    typeHints: boolean;
    nativeTypes?: boolean;
    matchStatements?: boolean;
}
export declare const pythonOptions: {
    features: EnumOption<"python-version", {
        readonly "3.5": {
            readonly typeHints: false;
            readonly dataClasses: false;
        };
        readonly "3.6": {
            readonly typeHints: true;
            readonly dataClasses: false;
        };
        readonly "3.7": {
            readonly typeHints: true;
            readonly dataClasses: true;
        };
        readonly "3.9": {
            readonly typeHints: true;
            readonly dataClasses: true;
            readonly nativeTypes: true;
        };
        readonly "3.10": {
            readonly typeHints: true;
            readonly dataClasses: true;
            readonly nativeTypes: true;
            readonly matchStatements: true;
        };
        readonly "3.11": {
            readonly typeHints: true;
            readonly dataClasses: true;
            readonly nativeTypes: true;
            readonly matchStatements: true;
        };
    }, "3.5" | "3.6" | "3.7" | "3.9" | "3.10" | "3.11">;
    justTypes: BooleanOption<"just-types">;
    nicePropertyNames: BooleanOption<"nice-property-names">;
    pydanticBaseModel: BooleanOption<"pydantic-base-model">;
};
export declare const pythonLanguageConfig: {
    readonly displayName: "Python";
    readonly names: readonly ["python", "py"];
    readonly extension: "py";
};
export declare class PythonTargetLanguage extends TargetLanguage<typeof pythonLanguageConfig> {
    constructor();
    getOptions(): typeof pythonOptions;
    get stringTypeMapping(): StringTypeMapping;
    get supportsUnionsWithBothNumberTypes(): boolean;
    get supportsOptionalClassProperties(): boolean;
    needsTransformerForType(t: Type): boolean;
    protected makeRenderer<Lang extends LanguageName = "python">(renderContext: RenderContext, untypedOptionValues: RendererOptions<Lang>): PythonRenderer;
}
