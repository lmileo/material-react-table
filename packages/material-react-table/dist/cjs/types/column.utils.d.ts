import { type MRT_AggregationFns } from './aggregationFns';
import { type MRT_FilterFns } from './filterFns';
import { type MRT_SortingFns } from './sortingFns';
import { type Row } from '@tanstack/react-table';
import { type TableCellProps } from '@mui/material/TableCell';
import { type Theme } from '@mui/material/styles';
import { type MaterialReactTableProps, type MRT_Column, type MRT_ColumnDef, type MRT_ColumnOrderState, type MRT_DefinedColumnDef, type MRT_DisplayColumnIds, type MRT_FilterOption, type MRT_GroupingState, type MRT_Header, type MRT_TableInstance } from './types';
export declare const getColumnId: <TData extends Record<string, any> = {}>(columnDef: MRT_ColumnDef<TData>) => string;
export declare const getAllLeafColumnDefs: <TData extends Record<string, any> = {}>(columns: MRT_ColumnDef<TData>[]) => MRT_ColumnDef<TData>[];
export declare const prepareColumns: <TData extends Record<string, any> = {}>({ aggregationFns, columnDefs, columnFilterFns, defaultDisplayColumn, filterFns, sortingFns, }: {
    aggregationFns: {
        sum: import("@tanstack/react-table").AggregationFn<any>;
        min: import("@tanstack/react-table").AggregationFn<any>;
        max: import("@tanstack/react-table").AggregationFn<any>;
        extent: import("@tanstack/react-table").AggregationFn<any>;
        mean: import("@tanstack/react-table").AggregationFn<any>;
        median: import("@tanstack/react-table").AggregationFn<any>;
        unique: import("@tanstack/react-table").AggregationFn<any>;
        uniqueCount: import("@tanstack/react-table").AggregationFn<any>;
        count: import("@tanstack/react-table").AggregationFn<any>;
    } & Record<string, import("@tanstack/react-table").AggregationFn<any>>;
    columnDefs: MRT_ColumnDef<TData>[];
    columnFilterFns: {
        [key: string]: MRT_FilterOption;
    };
    defaultDisplayColumn: Partial<MRT_ColumnDef<TData>>;
    filterFns: {
        between: {
            <TData_1 extends Record<string, any> = {}>(row: Row<TData_1>, id: string, filterValues: [string | number, string | number]): boolean;
            autoRemove(val: any): boolean;
        };
        betweenInclusive: {
            <TData_2 extends Record<string, any> = {}>(row: Row<TData_2>, id: string, filterValues: [string | number, string | number]): boolean;
            autoRemove(val: any): boolean;
        };
        contains: {
            <TData_3 extends Record<string, any> = {}>(row: Row<TData_3>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        empty: {
            <TData_4 extends Record<string, any> = {}>(row: Row<TData_4>, id: string, _filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        endsWith: {
            <TData_5 extends Record<string, any> = {}>(row: Row<TData_5>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        equals: {
            <TData_6 extends Record<string, any> = {}>(row: Row<TData_6>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        fuzzy: {
            <TData_7 extends Record<string, any> = {}>(row: Row<TData_7>, columnId: string, filterValue: string | number, addMeta: (item: import("@tanstack/match-sorter-utils").RankingInfo) => void): boolean;
            autoRemove(val: any): boolean;
        };
        greaterThan: {
            <TData_8 extends Record<string, any> = {}>(row: Row<TData_8>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        greaterThanOrEqualTo: {
            <TData_9 extends Record<string, any> = {}>(row: Row<TData_9>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        lessThan: {
            <TData_10 extends Record<string, any> = {}>(row: Row<TData_10>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        lessThanOrEqualTo: {
            <TData_11 extends Record<string, any> = {}>(row: Row<TData_11>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        notEmpty: {
            <TData_12 extends Record<string, any> = {}>(row: Row<TData_12>, id: string, _filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        notEquals: {
            <TData_13 extends Record<string, any> = {}>(row: Row<TData_13>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        startsWith: {
            <TData_14 extends Record<string, any> = {}>(row: Row<TData_14>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        includesString: import("@tanstack/react-table").FilterFn<any>;
        includesStringSensitive: import("@tanstack/react-table").FilterFn<any>;
        equalsString: import("@tanstack/react-table").FilterFn<any>;
        arrIncludes: import("@tanstack/react-table").FilterFn<any>;
        arrIncludesAll: import("@tanstack/react-table").FilterFn<any>;
        arrIncludesSome: import("@tanstack/react-table").FilterFn<any>;
        weakEquals: import("@tanstack/react-table").FilterFn<any>;
        inNumberRange: import("@tanstack/react-table").FilterFn<any>;
    } & Record<string, import("@tanstack/react-table").FilterFn<any>>;
    sortingFns: {
        fuzzy: <TData_15 extends Record<string, any> = {}>(rowA: Row<TData_15>, rowB: Row<TData_15>, columnId: string) => number;
        alphanumeric: import("@tanstack/react-table").SortingFn<any>;
        alphanumericCaseSensitive: import("@tanstack/react-table").SortingFn<any>;
        text: import("@tanstack/react-table").SortingFn<any>;
        textCaseSensitive: import("@tanstack/react-table").SortingFn<any>;
        datetime: import("@tanstack/react-table").SortingFn<any>;
        basic: import("@tanstack/react-table").SortingFn<any>;
    } & Record<string, import("@tanstack/react-table").SortingFn<any>>;
}) => MRT_DefinedColumnDef<TData>[];
export declare const reorderColumn: <TData extends Record<string, any> = {}>(draggedColumn: MRT_Column<TData>, targetColumn: MRT_Column<TData>, columnOrder: MRT_ColumnOrderState) => MRT_ColumnOrderState;
export declare const showExpandColumn: <TData extends Record<string, any> = {}>(props: MaterialReactTableProps<TData>, grouping?: MRT_GroupingState) => boolean;
export declare const getLeadingDisplayColumnIds: <TData extends Record<string, any> = {}>(props: MaterialReactTableProps<TData>) => MRT_DisplayColumnIds[];
export declare const getTrailingDisplayColumnIds: <TData extends Record<string, any> = {}>(props: MaterialReactTableProps<TData>) => MRT_DisplayColumnIds[];
export declare const getDefaultColumnOrderIds: <TData extends Record<string, any> = {}>(props: MaterialReactTableProps<TData>) => string[];
export declare const getDefaultColumnFilterFn: <TData extends Record<string, any> = {}>(columnDef: MRT_ColumnDef<TData>) => MRT_FilterOption;
export declare const getIsFirstColumn: (column: MRT_Column, table: MRT_TableInstance) => boolean;
export declare const getIsLastColumn: (column: MRT_Column, table: MRT_TableInstance) => boolean;
export declare const getIsLastLeftPinnedColumn: (table: MRT_TableInstance, column: MRT_Column) => boolean;
export declare const getIsFirstRightPinnedColumn: (column: MRT_Column) => boolean;
export declare const getTotalRight: (table: MRT_TableInstance, column: MRT_Column) => number;
export declare const getCommonCellStyles: ({ column, header, table, tableCellProps, theme, }: {
    column: MRT_Column;
    header?: {
        id: string;
        getContext: () => import("@tanstack/react-table").HeaderContext<{}, unknown>;
        depth: number;
        index: number;
        getLeafHeaders: () => import("@tanstack/react-table").Header<{}, unknown>[];
        getSize: () => number;
        getStart: (position?: import("@tanstack/react-table").ColumnPinningPosition | undefined) => number;
        colSpan: number;
        headerGroup: import("@tanstack/react-table").HeaderGroup<{}>;
        isPlaceholder: boolean;
        placeholderId?: string | undefined;
        rowSpan: number;
        subHeaders: import("@tanstack/react-table").Header<{}, unknown>[];
        getResizeHandler: () => (event: unknown) => void;
        column: MRT_Column<{}>;
    } | undefined;
    table: MRT_TableInstance;
    tableCellProps: TableCellProps;
    theme: Theme;
}) => any;
export declare const MRT_DefaultColumn: {
    readonly filterVariant: "text";
    readonly minSize: 40;
    readonly maxSize: 1000;
    readonly size: 180;
};
export declare const MRT_DefaultDisplayColumn: {
    readonly columnDefType: "display";
    readonly enableClickToCopy: false;
    readonly enableColumnActions: false;
    readonly enableColumnDragging: false;
    readonly enableColumnFilter: false;
    readonly enableColumnOrdering: false;
    readonly enableEditing: false;
    readonly enableGlobalFilter: false;
    readonly enableGrouping: false;
    readonly enableHiding: false;
    readonly enableResizing: false;
    readonly enableSorting: false;
};
export declare const parseCSSVarId: (id: string) => string;