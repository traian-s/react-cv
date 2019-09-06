import React from 'react';

export const QuickInfo = (profile) => {
    return (
        <section className={'quickInfo'}>
            <div>
                <h5>Details</h5>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td><td>{profile.bio.name}</td>
                        </tr>
                        <tr>
                            <td>Job</td><td>{profile.title}</td>
                        </tr>
                        <tr>
                            <td>Phone</td><td>{profile.contact.phone}</td>
                        </tr>
                        <tr>
                            <td>Email</td><td>{profile.contact.email}</td>
                        </tr>
                        <tr>
                            <td>Timezone</td><td>{profile.timezone}</td>
                        </tr>
                        <tr>
                            <td>Languages</td>
                            <td>
                                {profile.languages.map((item) =>
                                    <span className={'lang'}>{item.lang}
                                        <span className={'level'}> [{item.value}]</span>
                                    </span>
                                )}
                            </td>
                        </tr>
                    <tr>
                        <td>Links</td>
                        <td>
                            {profile.usefulLinks.map((item) =>
                                <>{item}<br/></>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{profile.status}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h5>Keywords</h5>
                {profile.keywords.map((item) =>
                    <span className={'tag'}>
                        {item}
                    </span>
                )}
            </div>
        </section>
    )
}