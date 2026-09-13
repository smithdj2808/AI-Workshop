import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import { createTask, deleteTask, logout, toggleTask } from "./actions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: tasks } = await supabase
    .from("tasks")
    .select("id, title, course_name, completed")
    .order("created_at", { ascending: true });

  return (
    <main className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Signed in as {user.email}</p>
      <form action={logout}>
        <button type="submit">Log out</button>
      </form>

      <section className="tasks-section">
        <h2>Tasks</h2>

        <form action={createTask} className="task-form">
          <input name="title" placeholder="Task title" required />
          <input name="courseName" placeholder="Course name" required />
          <button type="submit">Add task</button>
        </form>

        {tasks && tasks.length > 0 ? (
          <ul className="task-list">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={
                  task.completed ? "task-item task-item-complete" : "task-item"
                }
              >
                <form action={toggleTask} className="task-toggle-form">
                  <input type="hidden" name="id" value={task.id} />
                  <input
                    type="hidden"
                    name="completed"
                    value={String(task.completed)}
                  />
                  <button
                    type="submit"
                    className="task-toggle-button"
                    aria-label={
                      task.completed ? "Mark incomplete" : "Mark complete"
                    }
                  >
                    {task.completed ? "✓" : ""}
                  </button>
                </form>
                <span className="task-title">{task.title}</span>
                <span className="task-course">{task.course_name}</span>
                <form action={deleteTask}>
                  <input type="hidden" name="id" value={task.id} />
                  <button type="submit" className="task-delete-button">
                    Delete
                  </button>
                </form>
              </li>
            ))}
          </ul>
        ) : (
          <p className="task-empty">No tasks yet.</p>
        )}
      </section>
    </main>
  );
}
