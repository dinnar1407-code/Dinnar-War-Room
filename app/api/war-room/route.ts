import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// 初始化 Supabase 客户端 (使用 service_role 权限)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    // 1. 解析前端传来的表单数据
    const body = await request.json();
    const { email, companyName, primaryObjective } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 2. 插入数据到 Supabase 的 war_room_leads 表
    const { data, error } = await supabase
      .from('war_room_leads')
      .insert([
        {
          email,
          company_name: companyName,
          primary_objective: primaryObjective,
        }
      ])
      .select();

    if (error) {
      console.error('Supabase Insert Error:', error);
      throw error;
    }

    // 3. 返回成功响应
    return NextResponse.json({ success: true, lead: data ? data[0] : null });

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
