import { forwardRef, useEffect, useRef } from "react"


const Checkbox = forwardRef(({ indeterminate = false, ...rest }, ref) => {

    const defaultRef = useRef();

    const resolvedRef = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indeterminate! = indeterminate;
    }, [indeterminate, resolvedRef]);
    return (
        <>
            <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
    )
})

export default Checkbox