export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header section */}
      <section className="w-full py-16 bg-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Terms and Conditions</h1>
        </div>
      </section>

      {/* Terms content */}
      <section className="w-full py-12 px-4 bg-white">
      <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdI2Pg4pNHxM56r3tlm-Uo9m-D8L1g2TFxr1kKXUqzh1NIBIQ/viewform?embedded=true" 
                style={{ border: "none" }}
                title="Terms and Conditions Agreement Form"
                className="h-[2800px] w-full"
              >
                Loading…
              </iframe>
      </section>
    </main>
  );
}