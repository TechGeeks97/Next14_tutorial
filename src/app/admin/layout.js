import AdminHeader from "@/components/AdminHeaders"

export default function AdminLayout({children}){

    return(
<section>
<AdminHeader/>
    {children}
</section>
    )
}