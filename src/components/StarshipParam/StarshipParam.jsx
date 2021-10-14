import React from 'react';

const StarshipParam = ({value, indexParam, maxElement, minElement}) => {


    let cls = '';

    if (minElement) {
        cls = '#ef9a9a red lighten-3';
    }
    if (maxElement) {
        cls = '#81c784 green lighten-2';
    }


    const isUrl = (item) => {
        const regexUrl = /^http(s)?/gm;
        if (regexUrl.test(item)) {
            item = <a href={item} rel="noreferrer" target="_blank">{item}</a>
        } else {
            item = <p>{item}</p>
        }
        return item;
    }

    const SubString = ({item}) => {
        const string = isUrl(item);
        return (
            <>
                {string}
            </>
        )
    }

    if (Array.isArray((value))) {
        value = value.map((item, index) => {
            return <SubString key={String(indexParam) + '_' + String(index)} item={item}/>;
        })
    }

    if (value.length === 0) {
        value = '---'
    }

    if (/^15/gm.test(indexParam) || /^16/gm.test(indexParam)) {
        const date = new Date(value);
        value = `${date.getHours()}:${date.getMinutes()}  ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} UTC: ${date.getTimezoneOffset() / 60}`
    }

    return (
        <>
            <td className={cls}>{isUrl(value)}</td>
        </>

    );
};

export default StarshipParam;