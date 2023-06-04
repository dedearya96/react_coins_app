import { Footer } from 'flowbite-react';

export default function FooterUI() {
    const currentYear = new Date().getFullYear();
    return (
        <Footer container>
            <div className="w-full">
                <Footer.Divider />
                <div className="flex items-center justify-center">
                    <Footer.Copyright
                        by="TC™"
                        href="#"
                        year={currentYear}
                    />
                </div>

            </div>
        </Footer>
    )
}