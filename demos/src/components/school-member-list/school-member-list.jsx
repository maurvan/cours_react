import React from 'react';

const SchoolMember = (props) => {
    const {firstname, lastname, status} = props;

    return (
        <article>
            <p>
                {(status !== 'Prof') ? firstname : 'Professeur'} {lastname}
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi consequatur dignissimos porro quod corporis nostrum possimus, provident eius? Maiores, esse? Non, ex? Quia doloribus voluptatem cumque praesentium laborum, ipsum perferendis.
            </p>
        </article>
    )
};

const SchoolMemberList = (props) => {

    const membersJSX = props.members.map(
        m => <SchoolMember key={m.id} {...m} /> // La key doit toujours se trouver dans l'élement le plus haut
    );

    return (
        <>
            <h3>Liste des membres d'une école</h3>
            <section>
                {membersJSX}
            </section>
        </>
    )
};

// Pour sécuriser, éviter des bugs
SchoolMemberList.defaultProps = {
    members: []
};

export default SchoolMemberList;