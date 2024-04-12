import SignupBtn from './components/SignupBtn';
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div className='bg-orange-500 text-white w-full h-14 flex justify-between'>
                <div className='text-xl font-bold ml-4 pt-2.5'>OneFeed</div>
                <div className='mr-4'>
                    <Link href="/login">
                        <SignupBtn />
                    </Link>
                </div>
            </div>
        </div>
    );
}
