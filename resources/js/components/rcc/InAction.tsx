import { ClubInActionGallery } from './ClubInActionGallery';

export default function InAction() {
    return (
        <div id="impact" className="bg-white py-16">
            <h1
                className="text-center text-5xl font-bold text-blue-950"
                style={{ fontFamily: 'Fredoka' }}
            >
                Robocode Club in action.
            </h1>
            <p className="mt-4 text-center text-gray-500">
                A glimpse of what we've built so far.
            </p>

            {/* Gallery Grid */}
            <ClubInActionGallery />
        </div>
    );
}
