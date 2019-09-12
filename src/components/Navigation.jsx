import React from 'react';
import {Export} from "./Export";

export const Navigation = () => {
    return (
        <nav>
            <ul  className={'siteNav'}>
                <li>
                    <a href={'#experience'}>
                        Work Experience
                    </a>
                </li>
                <li>
                    <a href={'#personal'}>
                        Personal Qualities
                    </a>
                </li>
                <li className={'export'}>
                    <Export />
                </li>
            </ul>
        </nav>
    )
}