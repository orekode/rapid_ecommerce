
let timer: any;

const Debounce = ({ callback = () => {}, duration = 1000 } : { callback: any, duration?: number}) => {
    
    clearTimeout(timer);

    timer = setTimeout(() => {
        callback();
    }, duration)

}

export default Debounce;