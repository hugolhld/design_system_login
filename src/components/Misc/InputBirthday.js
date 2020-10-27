import React from 'react';
import Select from 'react-select';
import Wrapper from '../Layout/Wrapper';
const groupDay = []
const groupMonth = []
const groupYear = []

for(let i = 0; i < 32; i++)
{
    groupDay.push({value : i, label: i},)
}
for(let i = 0; i < 13; i++)
{
    groupMonth.push({value : i, label: i},)
}
for(let i = 1920; i < 2016; i++)
{
    groupYear.push({value : i, label: i},)
}

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
        options={groupMonth}
        formatGroupLabel={formatGroupLabel}
        placeholder="MM"
        />
        <Select
        // defaultValue={groupYear[55]}
        options={groupYear}
        formatGroupLabel={formatGroupLabel}
        placeholder="AAAA"
        />
    </Wrapper>
)

export default InputBirthday
  