import SignupBtn from './components/SignupBtn';

export default function Home() {
    return (
        <div>
            <div className='bg-orange-500 text-white w-full h-14 flex justify-between'>
                <div className='text-xl font-bold ml-4 pt-2.5'>OneFeed</div>
                <div className='mr-4'>
                    <SignupBtn />
                </div>
            </div>
        </div>
    );
}
