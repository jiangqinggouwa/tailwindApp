
import { StoreState } from "../redux/store"
import { connect as nativeConnect, MapStateToPropsParam, MapDispatchToPropsParam } from "react-redux";
import { ComponentClass } from "react";

type ComponentDecorator<P = any> = <T extends ComponentClass<P>>(WrappedComponent: T) => T

export const connect: <P, S = StoreState>(
    mapState: MapStateToPropsParam<Partial<P>, P, S>,
    mapDispatch?: MapDispatchToPropsParam<Partial<P>, P>
) => ComponentDecorator = nativeConnect as any;