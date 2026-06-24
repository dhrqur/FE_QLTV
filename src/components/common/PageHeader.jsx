import { Plus } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";

function PageHeader({ title, description, actionLabel, actionTo }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-orange-100 bg-white p-5 shadow-sm shadow-orange-950/5 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-2xl font-extrabold text-slate-800">{title}</h3>
        <p className="mt-1 text-sm font-medium text-slate-500">{description}</p>
      </div>
      {actionLabel && actionTo ? (
        <Button asChild className="bg-orange-500 font-bold hover:bg-orange-600">
          <Link to={actionTo}>
            <Plus className="size-4" />
            {actionLabel}
          </Link>
        </Button>
      ) : null}
    </div>
  );
}

export default PageHeader;
