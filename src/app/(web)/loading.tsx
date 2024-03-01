const Loading = () => {

    return <div className='bg-black w-full min-h-screen top-0 left-0 z-30 flex items-center justify-center'>
        <div className="ui-abstergo">
            <div className="abstergo-loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="ui-text">
                Loading
                <div className="ui-dot"></div>
                <div className="ui-dot"></div>
                <div className="ui-dot"></div>
            </div>
        </div>
    </div>
}
export default Loading;