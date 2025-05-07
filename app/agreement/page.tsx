export default function RentalAgreementPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header section */}
      <section className="w-full py-16 bg-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Rental Agreement 
          </h1>
        </div>
      </section>

      {/* Google Form Embed */}
      <section className="w-full py-12 px-4 bg-white">
      <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSes0v2HkvX9w5FMbRKAkOpGvpU6FW5mb1sWSpgex7xzMuHI3w/viewform?embedded=true"
                className="h-[4300px] w-full"
                style={{ border: "none" }}
                title="Rental Agreement Form"
              >
                Loading…
              </iframe>
      </section>
    </main>
  );
}