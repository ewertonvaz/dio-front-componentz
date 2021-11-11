export const Repository = (props) => {
    const { repos, starred } = props;
    return(
        <div role="separator" aria-label="repository" style={ {border: "solid 1px", borderColor: 'grey', padding: 2}}>
            <button>Repositories</button>
            <button>Starred</button>
        </div>
    );
}