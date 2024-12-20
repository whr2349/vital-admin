import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType as PropType_2 } from 'vue';
import { Ref as Ref_2 } from 'vue';
import { VNodeProps } from 'vue';

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const BaseLayout: __VLS_WithTemplateSlots<DefineComponent<{
    sidebarWidth: {
        type: PropType_2<string>;
        default: string;
    };
    sidebarCollapseWidth: {
        type: PropType_2<string>;
        default: string;
    };
    headHeight: {
        type: PropType_2<string>;
        default: string;
    };
    footHeight: {
        type: PropType_2<string>;
        default: string;
    };
    showSidebarCollapseButton: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    showSidebarRightBorder: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    showLogoBottomBorder: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    showLogoRightBorder: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    showHeadBottomBorder: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    showFootTopBorder: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    layoutMode: {
        type: PropType_2<"vertical" | "horizontal">;
        default: string;
    };
    themeMode: {
        type: PropType_2<"light" | "dark">;
        default: string;
    };
}, {
    sidebarCollapseHandler: (isCollapse: boolean) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSidebarCollapseChange: (collapse: boolean) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    sidebarWidth: {
        type: PropType_2<string>;
        default: string;
    };
    sidebarCollapseWidth: {
        type: PropType_2<string>;
        default: string;
    };
    headHeight: {
        type: PropType_2<string>;
        default: string;
    };
    footHeight: {
        type: PropType_2<string>;
        default: string;
    };
    showSidebarCollapseButton: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    showSidebarRightBorder: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    showLogoBottomBorder: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    showLogoRightBorder: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    showHeadBottomBorder: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    showFootTopBorder: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    layoutMode: {
        type: PropType_2<"vertical" | "horizontal">;
        default: string;
    };
    themeMode: {
        type: PropType_2<"light" | "dark">;
        default: string;
    };
}>> & {
    onOnSidebarCollapseChange?: ((collapse: boolean) => any) | undefined;
}, {
    sidebarWidth: string;
    sidebarCollapseWidth: string;
    headHeight: string;
    footHeight: string;
    showSidebarCollapseButton: boolean;
    showSidebarRightBorder: boolean;
    showLogoBottomBorder: boolean;
    showLogoRightBorder: boolean;
    showHeadBottomBorder: boolean;
    showFootTopBorder: boolean;
    layoutMode: "vertical" | "horizontal";
    themeMode: "light" | "dark";
}, {}>, {
    logo?(_: {}): any;
    sidebar?(_: {}): any;
    head?(_: {}): any;
    main?(_: {}): any;
    foot?(_: {}): any;
}>;

declare const MyComponentLibrary: {
    install: (app: any) => void;
};
export default MyComponentLibrary;

export declare const SystemLogo: __VLS_WithTemplateSlots_2<DefineComponent<{
    showTitle: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    systemLogoWidth: {
        type: PropType_2<string>;
    };
    systemLogoCollapseWidth: {
        type: PropType_2<string>;
    };
}, {
    showTitleChange: (value: boolean) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onShowTitleChange: (collapse: boolean) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    showTitle: {
        type: PropType_2<boolean>;
        default: boolean;
    };
    systemLogoWidth: {
        type: PropType_2<string>;
    };
    systemLogoCollapseWidth: {
        type: PropType_2<string>;
    };
}>> & {
    onOnShowTitleChange?: ((collapse: boolean) => any) | undefined;
}, {
    showTitle: boolean;
}, {}>, {
    logoImg?(_: {}): any;
    default?(_: {}): any;
}>;

/**
 * boolean组合式函数
 * @param initValue 初始值
 */
export declare function useBoolean(initValue?: boolean): {
    bool: Ref_2<boolean>;
    setBool: (value: boolean) => void;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
};

export { }
