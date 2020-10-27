import React, { Component } from 'react';
import Select from 'react-select';
import Wrapper from '../Layout/Wrapper';
const groupDay = [
]
const groupMonth = []
const groupYear = []

for(let i = 0; i < 31; i++)
{
    groupDay.push({value : i, label: i},)
}
for(let i = 0; i < 12; i++)
{
    groupMonth.push({value : i, label: i},)
}
for(let i = 1920; i < 2015; i++)
{
    groupYear.push({value : i, label: i},)
}

const groupedOptionsDay = [
    {
        label: "Jour",
        options: groupDay,
    },
]

const groupedOptionsMonth = [
    {
        label: "Mois",
        options: groupMonth,
    },
]

const groupedOptionsYear = [
    {
        label: "Année",
        options: groupYear,
    }
]

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#000',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);



const InputBirthday = () => (
    <Wrapper inputBirthday>
        <Select
        // defaultValue={groupDay[1]}
        options={groupDay}
        formatGroupLabel={formatGroupLabel}
        placeholder="JJ"
        />
        <Select
        // defaultValue={groupMonth[5]}
        options={groupedOptionsMonth}
        formatGroupLabel={formatGroupLabel}
        placeholder="MM"
        />
        <Select
        // defaultValue={groupYear[55]}
        options={groupedOptionsYear}
        formatGroupLabel={formatGroupLabel}
        placeholder="AAAA"
        />
    </Wrapper>
)

export default InputBirthday
  