import './BuiltWith.css';

const BuiltWith = ({ children }) => {
  return (
    <div className='built-with'>
      <p className='subtitle'>BUILT WITH</p>
      {children}
    </div>
  );
};

export default BuiltWith;
