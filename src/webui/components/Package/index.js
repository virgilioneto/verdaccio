/**
 * @prettier
 * @flow
 */

import React from 'react';
import type { Element } from 'react';
import { margin } from 'polished';

import Tag from '../Tag';
import { formatDate, formatDateDistance } from '../../utils/package';

import { IProps } from './types';
import { Wrapper, Header, A, Name, Version, Overview, OverviewItem, Icon, Text, Details, Avatar, Author, Field, Content, Footer } from './styles';

const getInitialsName = (name: string) =>
  name
    .split(' ')
    .reduce((accumulator, currentValue) => accumulator.charAt(0) + currentValue.charAt(0), '')
    .toUpperCase();

const Package = ({
  name: label,
  version,
  time,
  author: { name = 'Anonymous', avatar = '', email = '' },
  description,
  license = 'Unlicensed',
  keywords,
}: IProps): Element<Wrapper> => (
  <Wrapper>
    <Header>
      <A to={`detail/${label}`}>
        <Name>{label}</Name>
        {version && <Version>{`${version} version`}</Version>}
      </A>
      <Overview>
        <OverviewItem>
          <Icon name="license" modifiers={margin('4px', '5px', '0px', '0px')} />
          {license || 'Unlicensed'}
        </OverviewItem>
        <OverviewItem>
          <Icon name="time" />
          {`Published on ${formatDate(time)} • ${formatDateDistance(time)} ago`}
        </OverviewItem>
      </Overview>
    </Header>
    <Content>
      <Field>
        <Text text="Author" modifiers={margin('0px', '0px', '5px', '0px')} />
        <Author>
          <Avatar alt={name} src={avatar}>
            {!avatar && getInitialsName(name)}
          </Avatar>
          <Details>
            <Text text={name} weight="bold" />
            {email && <Text text={email} />}
          </Details>
        </Author>
      </Field>
      {description && (
        <Field>
          <Text text="Description" modifiers={margin('0px', '0px', '5px', '0px')} />
          <span>{description}</span>
        </Field>
      )}
    </Content>
    {keywords.length > 0 && (
      <Footer>
        {keywords.map((keyword, index) => (
          <Tag key={index}>{keyword}</Tag>
        ))}
      </Footer>
    )}
  </Wrapper>
);

Package.defaultProps = {
  author: {
    name: 'Anonymous',
    avatar: '',
    email: '',
    url: '',
  },
  description: '',
  license: 'Unlicensed',
  keywords: [],
};

export default Package;
