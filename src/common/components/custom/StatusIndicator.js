const StatusIndicator = ({ sx }) => {

    const styles = {
        display: "inline-block",
        marginLeft: "5px",
        marginRight: "5px",
        marginBottom: "2px",
        borderRadius: "50%",
        borderWidth: "0.5px",
        borderColor: "black",
        height: "10px",
        width: "10px"
    };

    return (
        <>
            <span style={{ ...styles, ...sx }} />
        </>
    );
};

export default StatusIndicator;
