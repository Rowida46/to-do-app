import loadingStatus from "../helpers/loadingStatus";

const LoadingIndicator = ({ msg }) => {
    const loading = (
        <div>
            <div>
                <img src="https://th.bing.com/th/id/R.d452daacda184e8b3463441c6943d9dd?rik=rhCzdZC4VcepOw&riu=http%3a%2f%2fcdn.lowgif.com%2ffull%2fd9675675623d5f27-loading-gif-transparent-background-loading-gif.gif&ehk=ger6YUKXgHkMB3l%2fZxjjANuPaiEbvOsekGSHTZo7Sl4%3d&risl=&pid=ImgRaw&r=0" />
                loading .....
            </div>
        </div>
    );
    const error = (<h3 className="diaplay-6 text-danger">{msg}</h3>);
    const success = (<h3 className="diaplay-6 text-success">{msg}</h3>);

    return <div>{msg === loadingStatus.loaded ? success : msg === loadingStatus.isLoading ? loading : error}</div>;
};

export default LoadingIndicator;
