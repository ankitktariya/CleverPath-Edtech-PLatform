exports.searchCourses = async (req, res) => {
  try {
    const { search } = req.query;

    const courses = await Course.find({
      courseName: { $regex: search, $options: "i" },
    });

    return res.json({
      success: true,
      data: courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};