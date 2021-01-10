import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
//set and unset are methods; from Sanity and for custom items
//if the value is nothing, we unset it. If it is something, we set it

function createPatchFrom(value) {
    return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

//built into browser - Intl based on locale of user
const formatMoney = Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
}).format;

export default function PriceInput({ type, value, onChange, inputComponent }) {
    return (
        <div>
            <h2>{type.title} - {value ? formatMoney(value / 100) : ''}
            
            </h2>
            <p>{type.description}</p>
            <input 
                type={type.name} 
                value={value} 
                onChange={event => onChange(createPatchFrom(event.target.value))}
                ref={inputComponent}
            />
        </div>
        //onChange(createPatchFormat)- take value, pass to Sanity, Sanity will patch to itself (for live updating), set or unset it
    );

}

//accessibility - add focus state 
PriceInput.focus = function() {
    this._inputElement.focus();
};
