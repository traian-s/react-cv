import React from 'react';
import {Export} from "./Export";

export const Navigation = () => {
    return (
        <nav>
            <ul  className={'siteNav'}>
                <li>
                    <a href={''}>
                        Work Experience
                    </a>
                </li>
                <li>
                    <a href={''}>
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