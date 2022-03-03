import { PureComponent } from "react"
import { StoreContext } from "./context"

export function connect(mapStateToProps, mapDispatchProps) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props,context){
        super(props, context)
        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }
      

      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            count: this.context.getState().count
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        return <WrappedComponent
          {...this.props}
          {...mapStateToProps(this.context.getState())}
          {...mapDispatchProps(this.context.dispatch)} />
      }
    }
    EnhanceComponent.contextType = StoreContext
    return EnhanceComponent;
  }
}