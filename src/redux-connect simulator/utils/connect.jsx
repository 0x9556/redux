import { PureComponent } from "react"
import StoreContext from './context'


export default function connect(mapStateToProps, mapDispatchToProps) {
    return function (WrappedComponent) {
        class EnhancedComponent extends PureComponent {
            componentDidMount() {
                this.unsubscribe = this.context.subscribe(() => {
                    this.setState({
                        storeState:this.context.getState()
                    })
                })
            }

            componentWillUnmount() {
                this.unsubscribe()
            }

            render() {
                return (
                    <WrappedComponent
                        {...this.props}
                        {...mapStateToProps(this.context.getState())}
                        {...mapDispatchToProps(this.context.dispatch)} 
                        />
                )
            }
        }
        EnhancedComponent.contextType = StoreContext
        return EnhancedComponent
    }
}