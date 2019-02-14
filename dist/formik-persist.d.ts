import * as React from 'react';
export interface PersistProps {
    name: string;
    debounce?: number;
}
export declare const Persist: React.ComponentClass<PersistProps, React.ComponentState> & {
    WrappedComponent: React.ComponentClass<PersistProps & {
        formik: import("../../../../../../Users/M86/Desktop/projects/formik-persist/node_modules/formik/dist/types").FormikContext<any>;
    }, React.ComponentState>;
};
