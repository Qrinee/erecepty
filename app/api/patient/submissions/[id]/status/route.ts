import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

async function updateStatus(req: NextRequest, id: string, status: string) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const response = await fetch(`${API_URL}/api/patient/submissions/${id}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    body: JSON.stringify({ status }),
  });

  const data = await response.json();
  return { ok: response.ok, data, status: response.status };
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const formData = await req.formData();
  const status = String(formData.get("status") || "");
  const { id } = await params;

  const result = await updateStatus(req, id, status);
  if (!result.ok) {
    return NextResponse.json(result.data, { status: result.status });
  }

  return NextResponse.redirect(new URL(`/admin/submissions/${id}`, req.url));
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { status } = await req.json();
  const { id } = await params;
  const result = await updateStatus(req, id, status);
  return NextResponse.json(result.data, { status: result.status });
}
