import React from 'react';
import {storiesOf, action} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {StoryWrapper} from './../_lib/storyUtils.js';
import ButtonGroup from './index.js';
import IconButton from './../IconButton/index.js';

storiesOf('ButtonGroup', module)
    .addDecorator(withKnobs)
    .addWithInfo(
        'default',
        `The ButtonGroup component.`,
        () => (
            <StoryWrapper>
                <ButtonGroup value="one" onSelect={action('onSelect')}>
                    <IconButton
                        id="one"
                        style="lighter"
                        icon="level-up-alt"
                        title="One, active"
                        />
                    <IconButton
                        id="two"
                        style="lighter"
                        icon="long-arrow-alt-right"
                        isDisabled="true"
                        title="Two (disabled)"
                        />
                    <IconButton
                        id="three"
                        style="lighter"
                        icon="level-down-alt"
                        title="Three"
                        />
                </ButtonGroup>
            </StoryWrapper>
        ),
        {inline: true}
    );
