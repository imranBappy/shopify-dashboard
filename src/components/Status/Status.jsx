
const Status = ({ status }) => {
    switch (status) {
        case 'Complated':
            return <span className=" inline-block w-3 h-3 rounded-full bg-green-700"></span>
        case 'Pending':
            return <span className=" inline-block w-3 h-3 rounded-full bg-amber-700"></span>
        case 'Canceled':
            return <span className=" inline-block w-3 h-3 rounded-full bg-red-700"></span>
        default:
            return <span className=" inline-block w-3 h-3 rounded-full bg-green-700"></span>
    }

};

export default Status;