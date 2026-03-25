import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  Globe,
  Layers,
  LineChart,
  Mail,
  User,
  Users,
  X,
} from "lucide-react";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timerRef = useRef(null);
  const newWindowRef = useRef(null);

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleDashboardClick = (e, link) => {
    e.preventDefault();

    newWindowRef.current = window.open(link, "_blank");

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (newWindowRef.current && !newWindowRef.current.closed) {
        newWindowRef.current.close();
      }

      setIsModalOpen(true);
    }, 5000);
  };

  const features = [
    {
      icon: <Briefcase size={24} />,
      title: "Hiring Manager Dashboard",
      desc: "Complete visibility into requisition status, pipeline health, and team hiring metrics.",
      link: "https://hiring.pixeladvant.com/",
    },
    {
      icon: <Users size={24} />,
      title: "HR Dashboard",
      desc: "Centralized hub for onboarding, compliance tracking, and core human resources operations.",
      link: "https://your-domain.com/hr-demo",
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Interviewer Dashboard",
      desc: "Streamlined evaluation forms, automated scheduling, and candidate feedback aggregation.",
      link: "https://your-domain.com/interviewer-demo",
    },
    {
      icon: <LineChart size={24} />,
      title: "Business Operational Dashboard",
      desc: "High-level analytics on cost-per-hire, time-to-fill, and strategic workforce planning.",
      link: "https://your-domain.com/ops-demo",
    },
  ];

  return (
    <>
      <section
        id="products"
        className="relative overflow-hidden bg-gray-50 py-16 md:py-20"
      >
        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-100/40 blur-[120px] -mr-32 -mt-32" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
            <div className="max-w-2xl text-left">
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-4 text-sm font-bold uppercase tracking-widest text-indigo-600"
              >
                The Flagship Ecosystem
              </motion.h4>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-4 text-3xl font-black leading-tight text-gray-900 md:text-4xl xl:text-[2.75rem]"
              >
                Click100: The All-In-One <br />
                <span className="text-indigo-600">Recruitment Operating System</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-sm text-sm font-medium leading-relaxed text-gray-500 md:text-base lg:pt-10"
            >
              A unified platform designed specifically for Global Capability Centers to manage ATS, BGV, and HR analytics in a single glass pane.
            </motion.p>
          </div>

          <div className="grid items-start gap-7 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-indigo-900 p-6 text-white shadow-2xl lg:col-span-7 md:p-8"
            >
              <div className="pointer-events-none absolute top-0 right-0 p-8 opacity-10">
                <Layers size={150} />
              </div>

              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px w-12 bg-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                    Featured Platform
                  </span>
                </div>

                <h3 className="mb-4 text-3xl font-black italic tracking-tighter md:text-4xl">
                  Click100
                </h3>
                <p className="mb-6 max-w-xl text-base leading-relaxed text-indigo-100/80 md:text-lg">
                  Stop juggling multiple tools. Click100 integrates every stage of the hiring journey, from automated requisition approvals to global background checks.
                </p>

                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {[
                    "Centralized Requisition Dash",
                    "Global BGV Integration",
                    "Real-time HR Analytics",
                    "AI Resume Shortlisting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-semibold text-indigo-50">
                      <CheckCircle2 className="shrink-0 text-indigo-400" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-black text-indigo-900 shadow-lg transition-all hover:bg-indigo-50"
                >
                  TRY PRODUCT DEMO
                  <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </button>
                <p className="mt-3 text-sm font-medium text-indigo-300">
                  Get instant free trial credentials
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-indigo-100 hover:shadow-xl md:p-6"
                >
                  <div className="shrink-0 rounded-xl bg-indigo-50 p-4 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                    {item.icon}
                  </div>

                  <div className="flex h-full flex-col justify-center text-left">
                    <h4 className="mb-2 text-base font-bold leading-snug text-gray-900">{item.title}</h4>
                    <p className="mb-3 text-sm leading-relaxed text-gray-500">{item.desc}</p>

                    <button
                      onClick={(e) => handleDashboardClick(e, item.link)}
                      className="mt-auto inline-flex w-max items-center gap-2 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-800"
                    >
                      View Live Dashboard <ExternalLink size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:mt-14 md:flex-row md:items-center md:gap-8 md:p-6"
          >
            <div className="flex items-center gap-6">
              <div className="shrink-0 rounded-2xl bg-orange-50 p-4 text-orange-600">
                <Globe size={32} />
              </div>
              <div>
                <h5 className="text-xl font-bold text-gray-900">Unified Global Dashboard</h5>
                <p className="text-gray-500">
                  View hiring health across multiple GCC locations in one map.
                </p>
              </div>
            </div>

            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-indigo-100 text-[10px] font-bold text-indigo-600"
                >
                  USER
                </div>
              ))}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gray-900 text-[10px] font-bold text-white">
                +10k
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <div className="relative bg-indigo-600 px-6 py-8 text-center">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 rounded-full bg-indigo-700/50 p-2 text-indigo-200 transition-colors hover:text-white"
                >
                  <X size={18} />
                </button>
                <h3 className="mb-2 text-2xl font-black text-white">Book a Free Trial</h3>
                <p className="text-sm font-medium text-indigo-100">
                  We noticed you're exploring! Get full access to the live dashboard credentials.
                </p>
              </div>

              <div className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-6 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="mb-2 text-xl font-bold text-gray-900">Credentials Sent!</h4>
                    <p className="mb-6 text-gray-500">
                      Check your email shortly for your Click100 login details and getting started guide.
                    </p>
                    <button
                      onClick={closeModal}
                      className="w-full rounded-xl bg-gray-100 py-3 font-bold text-gray-900 transition-colors hover:bg-gray-200"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleDemoSubmit} className="space-y-4">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-gray-900 transition-all focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/50"
                      />
                    </div>

                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Work Email"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-gray-900 transition-all focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/50"
                      />
                    </div>

                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Building size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Company Name"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-gray-900 transition-all focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-xl bg-indigo-600 py-4 font-bold text-white shadow-lg shadow-indigo-200 transition-colors hover:bg-indigo-700"
                    >
                      Get Demo Credentials
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Products;
