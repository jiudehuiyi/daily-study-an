

const WithRouter = (WrapperComponent)=>{

    return props=>(
        <Route render={ 
            (RouteProps)=>{
                return <WrapperComponent {...RouteProps} />
            }
        } />
    )
}
export default WithRouter;