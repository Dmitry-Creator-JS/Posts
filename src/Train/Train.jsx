import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const Train = () => {

    const log = ['true', "true", 'false', "true", "false", "true"]

    function equal(arr1 = [1, 2, 3], arr2 = [4, 5, 6]) {

        const square = arr1.map(item => Math.pow(item, 2))
        const cube = arr2.map(item => Math.pow(item, 3))

        let result1 = square.reduce(function (sum, elem) {
            return sum + elem
        })

        let result2 = cube.reduce(function (sum, elem) {
            return sum + elem
        })

        if (result1 > result2) {
            return ' True '
        } else return ' False '

    }
const [value, setValue] = useState(['Hello'])


const onChange = (e) => {
        setValue(e.target.value)
}


const arr = [];
    function addArr (e) {
        e.preventDefault()
        arr.push('hi')
    }

    return (
        <div>
            <div>
                {arr}
            </div>
            <form onSubmit={addArr}  >
                <MyInput
                    value={arr}
                    onChange={onChange}

                />

                <MyButton type='submit' > ✅ </MyButton>
            </form>

        </div>
    );
};

export default Train;