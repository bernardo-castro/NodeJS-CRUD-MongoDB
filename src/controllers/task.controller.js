import Task from "../models/Task";

export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};


export const createTask = async (req, res) => {
    try {
      const task = new Task(req.body);
  
      const taskSaved = await task.save();
  
      console.log(taskSaved);
  
      res.redirect("/");
    } catch (err) {
      console.log(err.message);
    }
  };


export const editTask = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      res.render("edit", { task: task });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  };

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  };

export const toggleDoneTask = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id);
    task.done = !task.done;
    await task.save();
    console.log(task);
    res.redirect("/");
  }