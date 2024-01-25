/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShoesCreateFormInputValues = {
    designer?: string;
    model?: string;
    price?: number;
    url?: string;
};
export declare type ShoesCreateFormValidationValues = {
    designer?: ValidationFunction<string>;
    model?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoesCreateFormOverridesProps = {
    ShoesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    designer?: PrimitiveOverrideProps<TextFieldProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShoesCreateFormProps = React.PropsWithChildren<{
    overrides?: ShoesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShoesCreateFormInputValues) => ShoesCreateFormInputValues;
    onSuccess?: (fields: ShoesCreateFormInputValues) => void;
    onError?: (fields: ShoesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShoesCreateFormInputValues) => ShoesCreateFormInputValues;
    onValidate?: ShoesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShoesCreateForm(props: ShoesCreateFormProps): React.ReactElement;
