import React from "react";
import styles from "./Select.module.css"


interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Array<{
        value: string;
        name: string;
    }>;
    defaultValue: string;
    margin?: string;
}

const Select: React.FC<Props> = ({options, defaultValue, margin, ...rest}) => {

    const onChangeSelectValue = (event: React.SyntheticEvent<HTMLSelectElement>) => {
        console.log(event.currentTarget.value)
    }

    return (
        <select {...rest} onChange={onChangeSelectValue} style={{margin}} className={styles.root}>
            <option hidden>{defaultValue}</option>

            {options.map((option, index) =>
                <option value={option.value} key={index}>
                    {option.name}
                </option>
            )}
        </select>
    )
}


export {Select}