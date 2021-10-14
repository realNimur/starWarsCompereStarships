import React from 'react';
import './TableCompare.css';
import StarshipParam from "../StarshipParam/StarshipParam";

const TableCompare = ({compareList}) => {
    const keys = Object.keys(compareList[0]);

    let compareParams = [
        {
            name: 'cost_in_credits',
            data: {
                maxValue: {
                    value: 0,
                    index: null,
                },
                minValue: {
                    value: 1e10,
                    index: null,
                }
            }
        },
        {
            name: 'length', data: {
                maxValue: {
                    value: 0,
                    index: null,
                },
                minValue: {
                    value: 1e10,
                    index: null,
                }
            }
        },
        {
            name: 'max_atmosphering_speed', data: {
                maxValue: {
                    value: 0,
                    index: null,
                },
                minValue: {
                    value: 1e10,
                    index: null,
                }
            }
        },
        {
            name: 'crew', data: {
                maxValue: {
                    value: 0,
                    index: null,
                },
                minValue: {
                    value: 1e10,
                    index: null,
                }
            }
        },
        {
            name: 'passengers', data: {
                maxValue: {
                    value: 0,
                    index: null,
                },
                minValue: {
                    value: 1e10,
                    index: null,
                }
            }
        },
        {
            name: 'cargo_capacity', data: {
                maxValue: {
                    value: 0,
                    index: null,
                },
                minValue: {
                    value: 1e10,
                    index: null,
                }
            }
        },
        {
            name: 'hyperdrive_rating', data: {
                maxValue: {
                    value: 0,
                    index: null,
                },
                minValue: {
                    value: 1e10,
                    index: null,
                }
            }
        }
    ];
    if (compareList.length > 1) {
        compareParams.forEach((params) => {
            compareList.forEach((compareItem, index) => {
                const value = compareItem[params.name];
                if (value !== 'unknown') {
                    if (value < params.data.minValue.value) {
                        params.data.minValue.value = Number(compareItem[params.name]);
                        params.data.minValue.index = index;
                    }
                    if (value > params.data.maxValue.value) {
                        params.data.maxValue.value = Number(compareItem[params.name]);
                        params.data.maxValue.index = index;
                    }
                }
            })
        })
    }

    return (
        <>
            <table className={'table centered'}>
                <tbody>
                {
                    keys.map((keyName, keyIndex) => {
                        return (
                            <tr key={keyIndex + keyName + Math.random()}>
                                <td className={"table__caption"}>{keyName}</td>
                                {compareList.map((compareItem, compareIndex) => {
                                        let maxElement = false;
                                        let minElement = false;
                                        compareList.length > 1 && compareParams.forEach((compareParam) => {
                                            if (compareParam.name === keyName) {
                                                if (compareIndex === compareParam.data.maxValue.index) {
                                                    maxElement = true;
                                                }
                                                if (compareIndex === compareParam.data.minValue.index) {
                                                    minElement = true;
                                                }
                                            }
                                        })
                                        return <StarshipParam
                                            indexParam={String(keyIndex) + String(compareIndex)}
                                            key={String(keyIndex) + String(compareIndex)}
                                            value={compareItem[keyName]}
                                            maxElement={maxElement}
                                            minElement={minElement}
                                        />
                                    }
                                )
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    );
};

export default TableCompare;