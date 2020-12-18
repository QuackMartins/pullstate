import React from "react";
import { IAsyncActionBeckonOptions, IAsyncActionWatchOptions, IOCreateAsyncActionOutput, TPullstateAsyncBeckonResponse, TPullstateAsyncWatchResponse } from "./async-types";
export declare enum EAsyncActionInjectType {
    WATCH = "watch",
    BECKON = "beckon"
}
interface IPropsInjectAsyncActionBase<A, R, T extends string, N> {
    action: IOCreateAsyncActionOutput<A, R, T, N>;
    args?: A;
}
export interface IPropsInjectAsyncActionBeckon<A = any, R = any, T extends string = string, N = any> extends IPropsInjectAsyncActionBase<A, R, T, N> {
    type: EAsyncActionInjectType.BECKON;
    options?: IAsyncActionBeckonOptions;
    children: (response: TPullstateAsyncBeckonResponse<R, T>) => React.ReactElement;
}
export interface IPropsInjectAsyncActionWatch<A = any, R = any, T extends string = string, N = any> extends IPropsInjectAsyncActionBase<A, R, T, N> {
    type: EAsyncActionInjectType.WATCH;
    children: (response: TPullstateAsyncWatchResponse<R, T, N>) => React.ReactElement;
    options?: IAsyncActionWatchOptions;
}
export declare type TInjectAsyncActionProps = IPropsInjectAsyncActionBeckon | IPropsInjectAsyncActionWatch;
export declare function InjectAsyncAction(props: TInjectAsyncActionProps): React.ReactElement;
export {};
