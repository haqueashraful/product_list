import { DNA } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex justify-center items-center w-full'>
            <DNA
                visible={true}
                height="150"
                width="150"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default Loader;