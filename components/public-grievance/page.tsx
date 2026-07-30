
"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import {
  AlertCircle,
  FileCheck,
  Send,
  ShieldAlert,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { useCreateGrievance } from "@/hooks/use-grievances";
import type { CreateGrievanceData } from "@/types/public-grievance";

type SubmittedCitizen = {
  full_name: string;
  mobile_number: string;
};

const initialFormData: CreateGrievanceData = {
  full_name: "",
  mobile_number: "",
  email: "",
  complaint_category: "",
  municipal_ward: "",
  incident_address: "",
  description: "",
};

export default function PublicGrievance() {
  const createGrievanceMutation =
    useCreateGrievance();

  const [formData, setFormData] =
    useState<CreateGrievanceData>(
      initialFormData
    );

  const [submitted, setSubmitted] =
    useState(false);

  const [complaintId, setComplaintId] =
    useState("");

  const [submitError, setSubmitError] =
    useState("");

  const [submittedCitizen, setSubmittedCitizen] =
    useState<SubmittedCitizen>({
      full_name: "",
      mobile_number: "",
    });

  const clearSubmitError = () => {
    if (submitError) {
      setSubmitError("");
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const fieldName =
      event.target.name as keyof CreateGrievanceData;

    const value = event.target.value;

    setFormData((previousData) => ({
      ...previousData,
      [fieldName]: value,
    }));

    clearSubmitError();
  };

  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const numericValue = event.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    setFormData((previousData) => ({
      ...previousData,
      mobile_number: numericValue,
    }));

    clearSubmitError();
  };

  /*
   * Tumhare Select component ka onValueChange
   * string ke saath null bhi return kar sakta hai.
   */
  const handleCategoryChange = (
    value: string | null
  ) => {
    setFormData((previousData) => ({
      ...previousData,
      complaint_category: value ?? "",
    }));

    clearSubmitError();
  };

  const handleWardChange = (
    value: string | null
  ) => {
    setFormData((previousData) => ({
      ...previousData,
      municipal_ward: value ?? "",
    }));

    clearSubmitError();
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitError("");

    if (formData.full_name.trim().length < 2) {
      setSubmitError(
        "Please enter your full name."
      );
      return;
    }

    if (
      !/^[6-9]\d{9}$/.test(
        formData.mobile_number
      )
    ) {
      setSubmitError(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    if (!formData.complaint_category) {
      setSubmitError(
        "Please select a complaint category."
      );
      return;
    }

    if (!formData.municipal_ward) {
      setSubmitError(
        "Please select a municipal ward."
      );
      return;
    }

    if (
      formData.incident_address.trim().length <
      5
    ) {
      setSubmitError(
        "Incident address must contain at least 5 characters."
      );
      return;
    }

    if (
      formData.description.trim().length < 10
    ) {
      setSubmitError(
        "Description must contain at least 10 characters."
      );
      return;
    }

    const grievanceData: CreateGrievanceData = {
      full_name: formData.full_name.trim(),

      mobile_number:
        formData.mobile_number.trim(),

      email: formData.email.trim(),

      complaint_category:
        formData.complaint_category.trim(),

      municipal_ward:
        formData.municipal_ward.trim(),

      incident_address:
        formData.incident_address.trim(),

      description:
        formData.description.trim(),
    };

    try {
      const createdGrievance =
        await createGrievanceMutation.mutateAsync(
          grievanceData
        );

      setSubmittedCitizen({
        full_name:
          grievanceData.full_name,

        mobile_number:
          grievanceData.mobile_number,
      });

      setSubmitted(true);
      setComplaintId(
        String(createdGrievance.id)
      );

      setFormData(initialFormData);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Grievance submit nahi hui. Please try again.";

      setSubmitError(errorMessage);
    }
  };

  const handleClearForm = () => {
    setFormData(initialFormData);
    setSubmitError("");

    createGrievanceMutation.reset();
  };

  const handleRegisterAnother = () => {
    setSubmitted(false);
    setComplaintId("");
    setSubmitError("");

    setSubmittedCitizen({
      full_name: "",
      mobile_number: "",
    });

    setFormData(initialFormData);

    createGrievanceMutation.reset();
  };

  const scrollToForm = () => {
    const grievanceForm =
      document.getElementById(
        "grievance-form-section"
      );

    grievanceForm?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Page Header */}
        <div className="space-y-3 text-center">
          <span className="rounded-full border border-gov-saffron/20 bg-gov-saffron/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gov-saffron">
            Citizen Grievance Portal
          </span>

          <h1 className="text-center font-serif text-3xl font-black tracking-tight text-gov-blue-dark md:text-5xl">
            Public Grievance Redressal System
          </h1>

          <p className="mx-auto max-w-2xl text-sm font-medium text-slate-500 md:text-base">
            A responsive, transparent and
            citizen-first mechanism to resolve
            public concerns effectively.
          </p>

          <div className="mx-auto h-1.5 w-24 rounded-full bg-gov-saffron" />
        </div>

        {/* Information Section */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Left Information Card */}
          <m.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="relative flex flex-col items-start justify-between space-y-6 overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:p-10"
          >
            <div className="absolute left-0 top-0 h-full w-2 bg-gov-blue-medium" />

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-extrabold leading-tight tracking-tight text-gov-blue-dark md:text-3xl">
                Your Voice Matters, And We Act
                On It
              </h2>

              <p className="text-xs font-semibold leading-relaxed text-slate-600 md:text-sm">
                Town Panchayat, Aminagar Sarai , Baghpat is
                committed to delivering a
                responsive and responsible
                grievance redressal ecosystem.
                Citizens are encouraged to report
                issues related to sanitation,
                water supply, drainage, street
                lighting, road maintenance,
                garbage collection, stray animals,
                illegal encroachments, property
                tax disputes, and any civic
                discomfort affecting daily life.
              </p>

              <p className="text-xs font-medium leading-relaxed text-slate-600 md:text-sm">
                Each grievance registered is
                tracked through a structured
                monitoring system ensuring timely
                resolution by the concerned
                department. Our aim is to
                strengthen public trust by
                promoting accountability,
                transparency, and efficient service
                delivery.
              </p>

              <p className="text-xs font-medium leading-relaxed text-slate-600 md:text-sm">
                Click the button below to submit
                your grievance. Your participation
                helps us build a cleaner, safer,
                and more citizen-friendly Baghpat.
              </p>
            </div>

            <Button
              type="button"
              onClick={scrollToForm}
              className="cursor-pointer rounded-xl bg-gov-blue-medium px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-gov-blue-dark md:text-sm"
            >
              Submit Your Grievance
            </Button>
          </m.div>

          {/* Image Card */}
          <m.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="group relative min-h-[350px] overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 shadow-xl"
          >
            <Image
              src="/grievance.png"
              width={700}
              height={700}
              priority
              alt="Public grievance redressal portal"
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6 space-y-1 text-white">
              <h3 className="text-lg font-black leading-none tracking-tight text-gov-saffron md:text-xl">
                Grievance Redressal Portal
              </h3>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Quick. Transparent.
                Citizen-Centric.
              </p>
            </div>
          </m.div>
        </div>

        {/* Grievance Form */}
        <div
          id="grievance-form-section"
          className="scroll-mt-24 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl"
        >
          {/* Form Header */}
          <div className="flex items-center gap-3 bg-gov-blue-dark px-8 py-5 text-white">
            <ShieldAlert className="h-6 w-6 text-gov-saffron" />

            <div>
              <h2 className="text-base font-extrabold uppercase tracking-wider">
                Grievance Submission Form
              </h2>

              <p className="text-[10px] font-bold text-slate-300">
                Please fill in correct details.
                False complaints are subject to
                legal checks.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                /* Success Screen */
                <m.div
                  key="grievance-success"
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  className="mx-auto flex max-w-md flex-col items-center justify-center space-y-4 py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-500 shadow-inner">
                    <FileCheck className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-800">
                    Grievance Registered
                    Successfully
                  </h3>

                  <p className="text-xs font-semibold leading-relaxed text-slate-500">
                    Thank you,{" "}
                    <span className="font-black text-gov-blue-dark">
                      {
                        submittedCitizen.full_name
                      }
                    </span>
                  </p>

                  <span className="block rounded-xl border border-slate-200 bg-slate-100 px-5 py-2.5 font-mono text-sm font-black uppercase tracking-widest text-gov-blue-dark">
                    {complaintId}
                  </span>

                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Your registered mobile number
                    is +91-
                    {
                      submittedCitizen.mobile_number
                    }
                    .
                  </p>

                  <Button
                    type="button"
                    onClick={
                      handleRegisterAnother
                    }
                    className="mt-4 cursor-pointer rounded-lg bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-200"
                  >
                    Register Another Grievance
                  </Button>
                </m.div>
              ) : (
                /* Form Fields */
                <m.form
                  key="grievance-form"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name, Phone and Email */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Full Name */}
                    <div>
                      <Label
                        htmlFor="full-name"
                        className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
                      >
                        Your Full Name
                      </Label>

                      <Input
                        id="full-name"
                        required
                        type="text"
                        name="full_name"
                        minLength={2}
                        maxLength={120}
                        autoComplete="name"
                        value={
                          formData.full_name
                        }
                        onChange={
                          handleInputChange
                        }
                        disabled={
                          createGrievanceMutation.isPending
                        }
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:outline-gov-blue-medium"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <Label
                        htmlFor="mobile-number"
                        className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
                      >
                        Mobile Number
                      </Label>

                      <Input
                        id="mobile-number"
                        required
                        type="tel"
                        name="mobile_number"
                        inputMode="numeric"
                        autoComplete="tel"
                        maxLength={10}
                        pattern="[6-9][0-9]{9}"
                        value={
                          formData.mobile_number
                        }
                        onChange={
                          handlePhoneChange
                        }
                        disabled={
                          createGrievanceMutation.isPending
                        }
                        placeholder="10-digit mobile number"
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:outline-gov-blue-medium"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="grievance-email"
                        className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
                      >
                        Email Address
                      </Label>

                      <Input
                        id="grievance-email"
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={
                          handleInputChange
                        }
                        disabled={
                          createGrievanceMutation.isPending
                        }
                        placeholder="rahul.sharma@domain.com"
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:outline-gov-blue-medium"
                      />
                    </div>
                  </div>

                  {/* Category and Ward */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Complaint Category */}
                    <div>
                      <Label className="mb-1 block text-[10px] font-bold uppercase text-slate-500">
                        Complaint Category
                      </Label>

                      <Select
                        name="complaint_category"
                        value={
                          formData.complaint_category
                        }
                        onValueChange={
                          handleCategoryChange
                        }
                        disabled={
                          createGrievanceMutation.isPending
                        }
                      >
                        <SelectTrigger className="w-full rounded-xl border-slate-200 text-xs font-semibold">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="Sanitation">
                            Garbage Dumping
                          </SelectItem>

                          <SelectItem value="Water Supply">
                            Water Supply
                          </SelectItem>

                          <SelectItem value="Roads">
                            Damaged Roadways
                          </SelectItem>

                          <SelectItem value="Streetlights">
                            Street Lights
                            Malfunction
                          </SelectItem>

                          <SelectItem value="Encroachments">
                            Illegal Encroachment
                          </SelectItem>

                          <SelectItem value="Pipeline Leakage">
                            Pipeline Leakage
                          </SelectItem>

                          <SelectItem value="Drainage">
                            Drainage Problem
                          </SelectItem>

                          <SelectItem value="Property Tax">
                            Property Tax Dispute
                          </SelectItem>

                          <SelectItem value="Other">
                            Other Complaint
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Municipal Ward */}
                    <div>
                      <Label className="mb-1 block text-[10px] font-bold uppercase text-slate-500">
                        Select Municipal Ward
                      </Label>

                      <Select
                        name="municipal_ward"
                        value={
                          formData.municipal_ward
                        }
                        onValueChange={
                          handleWardChange
                        }
                        disabled={
                          createGrievanceMutation.isPending
                        }
                      >
                        <SelectTrigger className="w-full rounded-xl border-slate-200 text-xs font-semibold">
                          <SelectValue placeholder="Select Ward" />
                        </SelectTrigger>

                        <SelectContent>
                          {Array.from(
                            {
                              length: 11,
                            },
                            (_, index) => {
                              const wardNumber =
                                index + 1;

                              return (
                                <SelectItem
                                  key={
                                    wardNumber
                                  }
                                  value={`Ward ${wardNumber}`}
                                >
                                  Ward No.{" "}
                                  {wardNumber}
                                </SelectItem>
                              );
                            }
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Incident Address */}
                  <div>
                    <Label
                      htmlFor="incident-address"
                      className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
                    >
                      Incident Landmark / Address
                    </Label>

                    <Input
                      id="incident-address"
                      required
                      type="text"
                      name="incident_address"
                      minLength={5}
                      maxLength={255}
                      value={
                        formData.incident_address
                      }
                      onChange={
                        handleInputChange
                      }
                      disabled={
                        createGrievanceMutation.isPending
                      }
                      placeholder="e.g. Near Hanuman Temple, Railway Road"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:outline-gov-blue-medium"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <Label
                      htmlFor="grievance-description"
                      className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
                    >
                      Detailed Description of
                      Grievance
                    </Label>

                    <Textarea
                      id="grievance-description"
                      required
                      name="description"
                      minLength={10}
                      value={
                        formData.description
                      }
                      onChange={
                        handleInputChange
                      }
                      disabled={
                        createGrievanceMutation.isPending
                      }
                      rows={5}
                      placeholder="Please explain the issue and specific location details"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:outline-gov-blue-medium"
                    />
                  </div>

                  {/* Important Notice */}
                  <div className="flex items-center gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs font-semibold text-amber-800">
                    <AlertCircle className="h-5 w-5 shrink-0 text-amber-600" />

                    <span>
                      Before submitting, please
                      review all inputs. Reference
                      tickets are logged directly
                      into the Chief Officer&apos;s
                      dashboard for verification
                      audits.
                    </span>
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <m.div
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3"
                    >
                      <p className="text-xs font-semibold text-red-700">
                        {submitError}
                      </p>
                    </m.div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col-reverse items-stretch justify-end gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
                    <Button
                      type="button"
                      onClick={handleClearForm}
                      disabled={
                        createGrievanceMutation.isPending
                      }
                      className="cursor-pointer rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Clear Fields
                    </Button>

                    <Button
                      type="submit"
                      disabled={
                        createGrievanceMutation.isPending
                      }
                      className="flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-gov-saffron px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-gov-saffron-dark disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                    >
                      <span>
                        {createGrievanceMutation.isPending
                          ? "Submitting..."
                          : "Submit Official Grievance"}
                      </span>

                      <Send
                        className={`h-4 w-4 ${
                          createGrievanceMutation.isPending
                            ? "animate-pulse"
                            : ""
                        }`}
                      />
                    </Button>
                  </div>
                </m.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
