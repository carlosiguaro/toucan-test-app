import Link from "next/link";

export default function Advertisement() {
    return (
        <div className="advertisement">
            <div>
                <h1>Let's start a conversation. Contact us today!</h1>
                <div>
                    <Link href="/contact">Click Here or See Below</Link>
                </div>
            </div>
        </div>
    )
}